import type { Express } from "express";
import type { Server } from "http";

type SyncState = Record<string, boolean>;

const syncStore = new Map<string, SyncState>();

function isSyncState(value: unknown): value is SyncState {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => typeof entry === "boolean")
  );
}

function normalizeCode(code: string) {
  return code.trim().toUpperCase();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/sync/:code", (req, res) => {
    const code = normalizeCode(req.params.code);
    res.json({ state: syncStore.get(code) ?? {} });
  });

  app.post("/api/sync/:code", (req, res) => {
    const code = normalizeCode(req.params.code);
    const { state } = req.body;

    if (!isSyncState(state)) {
      return res.status(400).json({ error: "invalid state" });
    }

    syncStore.set(code, state);
    return res.json({ ok: true });
  });

  return httpServer;
}
