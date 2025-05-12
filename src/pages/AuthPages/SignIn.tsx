import React from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta.tsx";
import AuthPageLayout from "./AuthPageLayout.tsx";
import SignInForm from "../../components/auth/SignInForm.tsx";

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("auth.signIn.title")}
        description={t("auth.signIn.description")}
      />
      <AuthPageLayout>
        <SignInForm/>
      </AuthPageLayout>
    </>
  );
};

export default SignIn;
