// Azure Functions V4 (Node 16/18) - HTTP trigger
module.exports = async function (context, req) {
    const tenantId = process.env.TENANT_ID || "";
    const clientId = process.env.CLIENT_ID || "";

    // Optional: basic validation and helpful diagnostics in logs
    if (!tenantId || !clientId) {
        context.log("TENANT_ID or CLIENT_ID not set in SWA Configuration.");
    }

    context.res = {
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        body: { tenantId, clientId }
    };
};