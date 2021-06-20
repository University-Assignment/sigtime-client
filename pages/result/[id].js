import axios from "axios";
import { Button } from "antd";

import AppLayout from "../../components/AppLayout";

const { API_URL } = process.env;

const Result = ({ success, data }) => {
  const { complete, _id } = data;
  return (
    <AppLayout>
      {success ? (
        <div>
          <h1>{complete ? "결과" : "분석 중입니다!"}</h1>
          <img
            width="600"
            height="400"
            src={`${API_URL}/static/${_id}/results/SBS96/SBS96_selection_plot.jpg`}
          />
          <img
            width="600"
            height="400"
            src={`${API_URL}/static/${_id}/results/SBS96/All_Solutions/SBS96_3_Signatures/Activities/SBS96_S3_NMF_Activity_Plots.jpg`}
          />
          <div>
            <img
              width="600"
              height="300"
              src={`${API_URL}/static/${_id}/results/SBS96/All_Solutions/SBS96_3_Signatures/Signatures/Signature_plotSBS_96_plots_S3_0.jpg`}
            />
            <img
              width="600"
              height="300"
              src={`${API_URL}/static/${_id}/results/SBS96/All_Solutions/SBS96_3_Signatures/Signatures/Signature_plotSBS_96_plots_S3_1.jpg`}
            />
            <img
              width="600"
              height="300"
              src={`${API_URL}/static/${_id}/results/SBS96/All_Solutions/SBS96_3_Signatures/Signatures/Signature_plotSBS_96_plots_S3_2.jpg`}
            />
          </div>
          <Button>
            <a href={`${API_URL}/static/${_id}/NewMat.csv`}>NewMat download</a>
          </Button>
          <Button>
            {" "}
            <a href={`${API_URL}/static/${_id}/NewMat_Sig.csv`}>
              NewMat_Sig download
            </a>
          </Button>
          <Button>
            <a href={`${API_URL}/static/${_id}/FinalMat_Sig0_data.csv`}>
              FinalMat_Sig0_data download
            </a>
          </Button>
          <Button>
            <a href={`${API_URL}/static/${_id}/FinalMat_Sig1_data.csv`}>
              FinalMat_Sig1_data download
            </a>
          </Button>
          <Button>
            <a href={`${API_URL}/static/${_id}/FinalMat_Sig2_data.csv`}>
              FinalMat_Sig2_data download
            </a>
          </Button>
        </div>
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
    res = await axios.get(`${API_URL}/v1/analysis`, {
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
