import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getUser, saveUser } from "../utils/auth";

const initialForm = {
  name: "",
  dateOfBirth: "",
  phone: "",
  location: "",
  email: ""
};

const loginDraftStorageKey = "restaurantLoginDraft";

function getSavedForm() {
  const savedForm = localStorage.getItem(loginDraftStorageKey);

  if (!savedForm) {
    return initialForm;
  }

  try {
    return { ...initialForm, ...JSON.parse(savedForm) };
  } catch {
    localStorage.removeItem(loginDraftStorageKey);
    return initialForm;
  }
}

function Login() {
  const navigate = useNavigate();
  const routeLocation = useLocation();
  const { addToCart } = useCart();
  const savedUser = getUser();
  const [form, setForm] = useState(getSavedForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem(loginDraftStorageKey, JSON.stringify(form));
  }, [form]);

  if (savedUser) {
    return <Navigate to="/" replace />;
  }

  function validateForm() {
    const nextErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth = "Please enter your date of birth.";
    } else if (form.dateOfBirth > today) {
      nextErrors.dateOfBirth = "Date of birth cannot be in the future.";
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (!/^[\d\s()+-]{10,20}$/.test(form.phone) || phoneDigits.length !== 10) {
      nextErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!form.location.trim()) {
      nextErrors.location = "Please enter your location.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value
    }));
    setSubmitted(false);

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: ""
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm();

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    saveUser(form);
    localStorage.removeItem(loginDraftStorageKey);

    if (routeLocation.state?.food) {
      navigate("/cart", { replace: true });
      window.setTimeout(() => addToCart(routeLocation.state.food), 0);
      return;
    }

    setSubmitted(true);
    navigate("/profile", { replace: true });
  }

  return (
    <section className="login-page">
      <div className="login-intro">
        <span className="login-eyebrow">WELCOME TO TASTY BITES</span>
        <h1>Good food starts with knowing you.</h1>
        <p>Save your details once and make every order feel a little more personal.</p>
        <div className="login-note">
          <span aria-hidden="true">✦</span>
          <p>Your details stay private and are only used to improve your experience.</p>
        </div>
      </div>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="login-form-heading">
          <span>YOUR DETAILS</span>
          <h2>Let&apos;s get started</h2>
          <p>All fields are required.</p>
        </div>

        <div className="login-fields">
          <div className="login-field login-field-wide">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Johnson"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
          </div>

          <div className="login-field">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              autoComplete="bday"
              max={new Date().toISOString().split("T")[0]}
              value={form.dateOfBirth}
              onChange={handleChange}
              aria-invalid={Boolean(errors.dateOfBirth)}
              aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
            />
            {errors.dateOfBirth && <span id="dateOfBirth-error" className="field-error">{errors.dateOfBirth}</span>}
          </div>

          <div className="login-field">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="10-digit number"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
          </div>

          <div className="login-field">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              autoComplete="address-level2"
              placeholder="City or neighbourhood"
              value={form.location}
              onChange={handleChange}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? "location-error" : undefined}
            />
            {errors.location && <span id="location-error" className="field-error">{errors.location}</span>}
          </div>

          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
          </div>
        </div>

        <button className="login-submit" type="submit">
          Continue to Tasty Bites <span aria-hidden="true">→</span>
        </button>

        {submitted && (
          <p className="login-success" role="status">
            Details saved. Welcome to Tasty Bites!
          </p>
        )}
      </form>
    </section>
  );
}

export default Login;