import axios from "axios";

import AppLayout from "../../components/AppLayout";

const Result = ({ success, complete }) => {
  return (
    <AppLayout>
      {success ? (
        <div>{complete ? "결과" : "분석 중입니다!"}</div>
      ) : (
        <div>결과가 존재하지 않습니다!</div>
      )}
    </AppLayout>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.params;

  let res;
  try {
    res = await axios.get("http://127.0.0.1:5000/v1/analysis", {
      params: { id },
    });
  } catch (err) {
    return {
      props: {
        success: false,
      },
    };
  }

  const { success, data } = res.data;

  return { props: { success, data } };
}

export default Result;
