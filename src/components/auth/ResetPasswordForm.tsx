import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Button from "../../components/ui/button/Button";

const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const [ formData, setFormData ] = useState({
    email: "",
  });
  const [ errors, setErrors ] = useState<Record<string, string>>({});
  const [ isSubmitted, setIsSubmitted ] = useState(false);

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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement password reset logic
      console.log("Reset password for:", formData.email);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("auth.resetPassword.emailSent")}
        </h2>
        <p className="text-gray-600">
          {t("auth.resetPassword.emailSentDescription")}
        </p>
        <Link
          to="/auth/sign-in"
          className="inline-block font-medium text-brand-600 hover:text-brand-500"
        >
          {t("auth.backToSignIn")}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <Button variant={"primary"} className="w-full">
          {t("auth.sendResetLink")}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          {t("auth.rememberPassword")}{" "}
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

export default ResetPasswordForm;
