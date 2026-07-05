import { Router } from "express";
import { collectionRouter } from "./collection.routes.js";
import { enquiryRouter } from "./enquiry.routes.js";
import { healthRouter } from "./health.routes.js";
import { lookRouter } from "./look.routes.js";
import { pricingRouter } from "./pricing.routes.js";
import { processRouter } from "./process.routes.js";
import { siteSettingsRouter } from "./site-settings.routes.js";

export const apiRouter = Router();

apiRouter.use(healthRouter);
apiRouter.use(collectionRouter);
apiRouter.use(lookRouter);
apiRouter.use(pricingRouter);
apiRouter.use(processRouter);
apiRouter.use(siteSettingsRouter);
apiRouter.use(enquiryRouter);
