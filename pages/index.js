import Image from "next/image";
import { Inter } from "next/font/google";
import Questions, {
  getServerSideProps as getServerSidePropsQuestions,
} from './questions/Questions'

export function getServerSideProps(context) {
  return getServerSidePropsQuestions(context);
}

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return <Questions {...props} />;
}
