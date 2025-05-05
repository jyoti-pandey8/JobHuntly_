import LandingPageComponent from "~/components/pages/LandingPage";
import { MainLayout } from "~/components/templates/MainLayout";

export default function LandingPage() {
  return (
    <MainLayout pageTitle="LandingPage">
      <LandingPageComponent />
    </MainLayout>
  );
}