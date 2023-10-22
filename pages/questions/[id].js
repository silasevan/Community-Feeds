import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cards from "../components/Cards";
import Head from "next/head";

function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
      );
      const result = await data.json();
      if (result) {
        setQuestions(result.items[0]);
        setLoading(false);
      }
    }

    id && fetchData();
  }, [id]);

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold p-5">Question:{id}</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Head>
            <title>{questions.title}</title>
          </Head>
          <Cards
            title={questions.title}
            views={questions.view_count}
            answers={questions.answers_count}
          />
        </>
      )}
    </div>
  );
}
export default QuestionDetail;
