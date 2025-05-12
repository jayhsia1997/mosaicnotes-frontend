import React from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/common/PageMeta.tsx";
import AuthPageLayout from "./AuthPageLayout.tsx";
import CreateAccountForm from "../../components/auth/CreateAccountForm.tsx";

const CreateAccount: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("auth.createAccount.title")}
        description={t("auth.createAccount.description")}
      />
      <AuthPageLayout>
        <CreateAccountForm/>
      </AuthPageLayout>
    </>
  );
};

export default CreateAccount;
