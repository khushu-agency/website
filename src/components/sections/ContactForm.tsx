"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormValues,
  SERVICE_AREA_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/validation/contact";
import { submitContactForm } from "@/app/contact/actions";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectTitle: "",
      serviceArea: "",
      problem: "",
      description: "",
      timeline: "",
      budget: "",
      additionalContext: "",
      companyWebsite: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setState("submitting");
    setServerError(null);
    const result = await submitContactForm(values);
    if (result.success) {
      setState("success");
      reset();
    } else {
      setState("error");
      setServerError(result.error);
    }
  }

  if (state === "success") {
    return (
      <div
        style={{
          border: "1px solid var(--line-strong)",
          borderRadius: "var(--radius-lg)",
          padding: "48px 40px",
          textAlign: "center",
          maxWidth: "560px",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-heading)" strokeWidth="1.8" style={{ margin: "0 auto 20px" }}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 11 15 16 9" />
        </svg>
        <h2 className="head" style={{ fontSize: "24px" }}>
          Project brief received.
        </h2>
        <p style={{ marginTop: "12px", color: "var(--text-body)", fontSize: "15px" }}>
          We&apos;ll review the problem, context and potential system before getting back to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "680px" }} noValidate>
      {/* Honeypot — hidden from real visitors */}
      <div style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input id="companyWebsite" type="text" tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
      </div>

      <div className="two-col">
        <div className="field-group">
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input id="name" className="field-input" {...register("name")} />
          {errors.name && <p className="field-error">{errors.name.message}</p>}
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="email">
            Work Email
          </label>
          <input id="email" type="email" className="field-input" {...register("email")} />
          {errors.email && <p className="field-error">{errors.email.message}</p>}
        </div>
      </div>

      <div className="two-col">
        <div className="field-group">
          <label className="field-label" htmlFor="company">
            Company <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input id="company" className="field-input" {...register("company")} />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="projectTitle">
            What are you looking to build?
          </label>
          <input id="projectTitle" className="field-input" placeholder="e.g. Internal knowledge assistant" {...register("projectTitle")} />
          {errors.projectTitle && <p className="field-error">{errors.projectTitle.message}</p>}
        </div>
      </div>

      <div className="two-col">
        <div className="field-group">
          <label className="field-label" htmlFor="serviceArea">
            Primary Area
          </label>
          <select id="serviceArea" className="field-select" {...register("serviceArea")} defaultValue="">
            <option value="" disabled>
              Select an area
            </option>
            {SERVICE_AREA_OPTIONS.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.serviceArea && <p className="field-error">{errors.serviceArea.message}</p>}
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="timeline">
            Timeline
          </label>
          <select id="timeline" className="field-select" {...register("timeline")} defaultValue="">
            <option value="" disabled>
              Select a timeline
            </option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.timeline && <p className="field-error">{errors.timeline.message}</p>}
        </div>
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="problem">
          Current Problem
        </label>
        <input
          id="problem"
          className="field-input"
          placeholder="What's not working today?"
          {...register("problem")}
        />
        {errors.problem && <p className="field-error">{errors.problem.message}</p>}
      </div>

      <div className="field-group">
        <label className="field-label" htmlFor="description">
          Project Description
        </label>
        <textarea id="description" className="field-textarea" {...register("description")} />
        {errors.description && <p className="field-error">{errors.description.message}</p>}
      </div>

      <div className="two-col">
        <div className="field-group">
          <label className="field-label" htmlFor="budget">
            Budget <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input id="budget" className="field-input" placeholder="e.g. $10k–$25k" {...register("budget")} />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="additionalContext">
            Additional Context <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
          </label>
          <input id="additionalContext" className="field-input" {...register("additionalContext")} />
        </div>
      </div>

      {state === "error" && serverError && <p className="field-error" style={{ marginBottom: "14px" }}>{serverError}</p>}

      <button type="submit" className="btn btn-solid" disabled={state === "submitting"} style={{ marginTop: "6px" }}>
        {state === "submitting" ? "Sending…" : "Send Project Brief"}
        <span className="ic">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </button>
    </form>
  );
}
