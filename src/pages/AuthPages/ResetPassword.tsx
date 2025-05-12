import React from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta.tsx";
import AuthPageLayout from "./AuthPageLayout.tsx";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm.tsx";

const ResetPassword: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("auth.resetPassword.title")}
        description={t("auth.resetPassword.description")}
      />
      <AuthPageLayout>
        <ResetPasswordForm/>
      </AuthPageLayout>
    </>
  );
};

export default ResetPassword;
