import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSelector from "../components/common/LanguageSelector.tsx";
import { ThemeToggleDropdown } from "../components/common/ThemeToggleDropdown.tsx";
import Button from "../components/ui/button/Button.tsx";
import AppLogo from "./AppLogo.tsx";

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-3">
          <AppLogo className="h-8 w-auto" />
          <span className="text-2xl font-bold">{t("base.title")}</span>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-blue-600 transition">
          {t("common.write")}
        </a>
        <LanguageSelector />
        <ThemeToggleDropdown />
        <Link to="/auth/create-account">
          <Button variant="outline" size="sm">
            {t("auth.createAccount.button")}
          </Button>
        </Link>
        <Link to="/auth/sign-in">
          <Button size="sm">{t("auth.signIn.button")}</Button>
        </Link>
      </div>
    </nav>
  );
};

export default AppHeader;
