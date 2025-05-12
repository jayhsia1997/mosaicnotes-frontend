import React from "react";
import AppLogo from "../../layout/AppLogo";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo.tsx";
import { useTranslation } from "react-i18next";

const AuthPageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <AppLogo className="h-12 w-auto"/>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t("base.title")}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo/>
        </div>
      </div>
    </>
  );
};

export default AuthPageLayout;
