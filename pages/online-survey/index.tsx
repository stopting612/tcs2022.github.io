import { Fragment, useState } from "react";
import InnerBanner from "../../Components/InnerBanner";
import styles from "./online-survey.module.css";
import { useEffect } from "react";
import { signIn } from "next-auth/react"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { MdDataExploration } from "react-icons/md";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../Components/Navbar";



interface Values {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email().required("必填"),
  password: yup.string().min(6, "最少6個字").max(15, "最少15個字").required("必填")
}).required();

const Online_Survey = () => {
  const [registerAc, setRegisterAc] = useState<boolean>(false);
  const {data: session, status} = useSession();

  const { register, handleSubmit, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: Values) => {
    registerAc ? loginUser(data) : registerUser(data)
  }

  function loginAcc() {
    setRegisterAc(true);
    
  }

  function RegisterAcc() {
    setRegisterAc(false);
  }

  const redirectToHome = () => {
    console.log("login Success");

  }

  const loginUser = async (data: Values) => {
    const res: any = await signIn(
      "credentials", {
        email: data.email,
        password: data.password,
        redirect: false      
      }
    )
      res.error? console.log(res.error): ""
    
  }

  const registerUser = async (data: Values) => {
    const res = await axios.post("api/register", {data}, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(async()=> {
      await loginUser(data);
      redirectToHome();
    }).catch((error) => console.log(error));

  }

  


  useEffect(() => {}, [registerAc]);

  return (
    
    <Fragment>
      <Navbar/>
      <InnerBanner title="網上問卷" />
      <main> 
        <div className={styles.intro}>
          <p>
            交通習慣調查旨在搜集市民最新的出行資料，以更新及改良策略性運輸模型，作預測交通情況之用。有關交通預測將在規劃運輸設施及制訂運輸政策時提供重要參考，讓未來運輸系統更切合市民的需要。
            <br />
            <br />
            若想預約訪問，請先啟動或登入帳戶，然後選按「預約訪問」按鈕進入預約版面，或直接致電查詢熱線進行預約。
          </p>
        </div>
        {session ? <div className={styles.buttonWrap}>
                  <button className={styles.btn} >
                    預約訪問
                  </button>
                </div> : <div
          className={
            registerAc
              ? `${styles.onlineSurveyWrap_active} ${styles.onlineSurveyWrap}`
              : styles.onlineSurveyWrap
          }
        >
          <div className={styles.onlineSurveyTabWrap}>
            <button
              className={
                registerAc
                  ? `${styles.register_btn} ${styles.tab_btn}`
                  : `${styles.register_btn} ${styles.register_active} ${styles.tab_btn}`
              }
              onClick={RegisterAcc}
            >
              啟動帳戶
            </button>
            <button
              className={
                registerAc
                  ? `${styles.register_active} ${styles.tab_btn} ${styles.login_btn}`
                  : `${styles.login_btn} ${styles.tab_btn}`
              }
              onClick={loginAcc}
            >
              登入
            </button>
          </div>
              <form className={styles.formBgWrap}  onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formContainWrap}>
                  <div className={styles.fieldWrap}>
                    {registerAc ? (
                      <>
                        <label htmlFor="password">登入電郵</label>
                        <input {...register("email")} />
                        <p>{errors.email?.message}</p>


                      </>
                    ) : (
                      <>
                        <label htmlFor="password">註冊電郵</label>
                        <input {...register("email")} />
                        <p>{errors.email?.message}</p>
                      </>
                    )}
                  </div>
                  <div className={styles.fieldWrap}>
                    {registerAc ? (
                      <>
                        <label htmlFor="password">登入密碼</label>
                        <input {...register("password")} />
                        <p>{errors.password?.message}</p>
                       
                        
                      </>
                    ) : (
                      <>
                        <label htmlFor="password">註冊密碼</label>
                        <input {...register("password")} />
                        <p>{errors.password?.message}</p>
                      </>
                      
                      
                    )}
                    
                    
                  </div>
                  

                </div>
                
                <div className={styles.buttonWrap}>
                  <button className={styles.btn} type="submit">
                    {registerAc ? "登入" : "註冊"}
                  </button>
                </div>
              </form>
        </div>}
        
      </main>
    </Fragment>
  );
};


export async function getStaticProps({ locale }: any) {
  return {
    
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page compone nt as props
    },
  };
}
export default Online_Survey;

function redirectToHome() {
  throw new Error("Function not implemented.");
}

