import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Button from "../../components/ui/button/Button";

const CreateAccountForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    if (!formData.name) {
      newErrors.name = t("auth.errors.nameRequired");
    }
    if (!formData.email) {
      newErrors.email = t("auth.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("auth.errors.emailInvalid");
    }
    if (!formData.password) {
      newErrors.password = t("auth.errors.passwordRequired");
    } else if (formData.password.length < 8) {
      newErrors.password = t("auth.errors.passwordTooShort");
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t("auth.errors.confirmPasswordRequired");
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("auth.errors.passwordsDoNotMatch");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement account creation logic
      console.log("Create account:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          {t("auth.name")}
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.name ? "border-red-300" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm`}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
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
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm`}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          {t("auth.password")}
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.password ? "border-red-300" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm`}
          />
          {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          {t("auth.createAccount.confirmPassword")}
        </label>
        <div className="mt-1">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`appearance-none block w-full px-3 py-2 border ${
              errors.confirmPassword ? "border-red-300" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm`}
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div>
        <Button className="w-full">
          {t("auth.createAccount.button")}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          {t("auth.haveAccount")}{" "}
          <Link
            to="/auth/sign-in"
            className="font-medium text-brand-600 hover:text-brand-500"
          >
            {t("auth.signIn.button")}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default CreateAccountForm;
