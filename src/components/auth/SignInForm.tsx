import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Button from "../../components/ui/button/Button";

const SignInForm: React.FC = () => {
  const { t } = useTranslation();
  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
  });
  const [ errors, setErrors ] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = t("auth.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("auth.errors.emailInvalid");
    }
    if (!formData.password) {
      newErrors.password = t("auth.errors.passwordRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement sign in logic
      console.log("Sign in:", formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("auth.email")}
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`appearance-none block w-full px-3 py-2 border ${
                errors.email ? "border-red-300" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("auth.password")}
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className={`appearance-none block w-full px-3 py-2 border ${
                errors.password ? "border-red-300" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link
              to="/auth/reset-password"
              className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
            >
              {t("auth.signIn.forgotPassword")}
            </Link>
          </div>
        </div>

        <div>
          <Button variant={"primary"} className="w-full">
            {t("auth.signIn.button")}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("auth.noAccount")}{" "}
            <Link
              to="/auth/create-account"
              className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
            >
              {t("auth.createAccount.button")}
            </Link>
          </p>
        </div>
      </form>
    </>

  );
};

export default SignInForm;
