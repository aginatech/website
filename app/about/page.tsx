import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="À Propos de Bluesky Digital - Une Histoire d'Innovation"
        description="Explorez l'histoire de Bluesky Digital, où l'innovation rencontre l'expertise. Notre équipe passionnée travaille sans relâche pour repousser les limites de la technologie et créer des solutions numériques exceptionnelles qui redéfinissent le futur."
      />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
