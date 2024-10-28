import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Importera bilder
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

import PropTypes from "prop-types";
import styled from "styled-components";

// Bildmappning
const imageMap = {
  image1: image1,
  image2: image2,
  image3: image3,
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%; // Set width to 100% or any desired size
  height: 0; // Set height to 0 for aspect ratio
  padding-top: 100%; // Use padding-top to maintain 1:1 aspect ratio
  overflow: hidden; // Hide any overflow
`;

const RecipeImage = styled.img`
  position: absolute; // Position the image absolutely within the container
  top: 0; // Align image to the top
  left: 0; // Align image to the left
  width: 100%; // Set width to 100%
  height: 100%; // Set height to 100%
  object-fit: cover; // Cover the container without stretching
`;

function RecipeCard({ recipe }) {
  // Deconstruct recipe-object
  const { name, description, cook_time, servings, img_url, course_name } =
    recipe;

  const selectedImage = imageMap[img_url] || image1;

  return (
    <>
      <Card className="bg-white w-96 shadow-xl rounded-lg overflow-hidden font-avenir">
        <ImageContainer>
          <RecipeImage src={selectedImage} alt="bild på bouillabaisse" />
        </ImageContainer>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Tillagningstid: {cook_time}</p>
          <p>Antal portioner: {servings}</p>
          <p>Kategori: {course_name}</p>
        </CardContent>
      </Card>
    </>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cook_time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    img_url: PropTypes.string,
    course_name: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
