//import React, { useState, useEffect } from "react";
//import { useRouter } from "next/router";
import Link from "next/link";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Head from "next/head";



export async function getServerSideProps(context) {
  const { page } = context.query;
  const data = await fetch(
    `https://api.stackexchange.com/2.2/questions?${
      page ? "page=${page}&" : ""
    }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
  );
  const result = await data.json();
  return {
    props: {
      questions: result.items,
      hasMore: result.has_more,
      page: page || 1,
    },
  };
}


function Questions({ questions, hasMore, page }) {
  //const [loading, setloading] = useState(true);
  //const [questions, setQuestions] = useState([]);
  //const [hasMore, setHasMore] = useState(false);

  //const router = useRouter();
  //const { page } = router.query;

  // useEffect(() => {
  // async function fetchData() {
  // const data = await fetch(
  // `https://api.stackexchange.com/2.2/questions?${
  // page ? "page=${page}&" : ""
  //}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
  //);

  //const result = await data.json();
  //if (result) {
  // setQuestions(result.items);
  //setHasMore(result.has_more);

  //setloading(false);
  //}
  //}

  //fetchData();
  //}, [page]);

  return (
    <div>
      
      <Head>
         <title>Questions</title>+{" "}
      </Head>
      <h2 className=" text-center text-2xl font-semibold p-5">Questions</h2>
      <div>
        {questions &&
          questions.map((question) => (
            <Link
              href={`/questions/${question.question_id}`}
              key={question.question_id}
              passHref
            >
              <Cards
                key={question.question_id}
                title={question.title}
                views={question.view_count}
                answers={question.answer_count}
              />
            </Link>
          ))}
      </div>
      <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
    </div>
  );
}





export default Questions;
