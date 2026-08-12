import {
  SERVICE_INQUIRY_STORAGE_KEY,
  isServiceInquiryId,
  type ServiceInquiryId,
} from "@/data/services";

export type ContactServiceIntent = {
  serviceId: ServiceInquiryId;
  /** Optional plan/detail note for maintenance or custom context */
  detail?: string;
};

export function storeContactServiceIntent(intent: ContactServiceIntent) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SERVICE_INQUIRY_STORAGE_KEY, JSON.stringify(intent));
}

export function readContactServiceIntent(): ContactServiceIntent | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(SERVICE_INQUIRY_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as ContactServiceIntent;
    if (!parsed?.serviceId || !isServiceInquiryId(parsed.serviceId)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearContactServiceIntent() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(SERVICE_INQUIRY_STORAGE_KEY);
}

/** Scroll to Contact and optionally preselect a service inquiry. */
export function openContactWithService(
  serviceId?: ServiceInquiryId,
  detail?: string,
) {
  if (typeof window === "undefined") return;
  if (serviceId) {
    storeContactServiceIntent({ serviceId, detail });
    window.dispatchEvent(
      new CustomEvent("contact-service-intent", {
        detail: { serviceId, detail },
      }),
    );
  }
  window.location.hash = "contact";
}
