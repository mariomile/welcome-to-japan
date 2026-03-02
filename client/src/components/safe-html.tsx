/**
import React from "react";

/**
 * SafeHtml renders HTML content with an allowlist-based sanitizer.
 * Only <b>, <i>, and <br> tags are permitted — all others are stripped.
 * Event handlers (on*) and javascript: URIs are also removed.
 */

const ALLOWED_TAGS = /^(b|i|br)$/i;

function sanitize(html: string): string {
  return html
    // Strip all tags not in the allowlist
    .replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (match, tag) =>
      ALLOWED_TAGS.test(tag) ? match.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, "") : ""
    )
    // Strip any remaining event handlers (belt-and-suspenders)
    .replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, "")
    // Strip javascript: URIs
    .replace(/javascript\s*:/gi, "");
}

interface SafeHtmlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "dangerouslySetInnerHTML"> {
  html: string;
}

export function SafeHtml({ html, ...props }: SafeHtmlProps) {
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: sanitize(html) }}
    />
  );
}
