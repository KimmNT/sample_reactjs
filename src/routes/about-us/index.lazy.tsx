import AboutUs from "@/views/AboutUs/AboutUs";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about-us/")({
  component: AboutUs,
});
