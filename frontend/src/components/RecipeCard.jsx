import image1 from "../assets/images/image1.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

import styled from 'styled-components';

const ImageContainer = styled.div`
    position: relative;
    width: 100%;         // Set width to 100% or any desired size
    height: 0;           // Set height to 0 for aspect ratio
    padding-top: 100%;   // Use padding-top to maintain 1:1 aspect ratio
    overflow: hidden;    // Hide any overflow
`;

const RecipeImage = styled.img`
    position: absolute;   // Position the image absolutely within the container
    top: 0;              // Align image to the top
    left: 0;             // Align image to the left
    width: 100%;         // Set width to 100%
    height: 100%;        // Set height to 100%
    object-fit: cover;   // Cover the container without stretching
`;

function RecipeCard() {
  console.log(image1);

  return (
    <>
      <Card className="bg-white w-96 shadow-xl rounded-lg overflow-hidden font-avenir">
      <ImageContainer>
      <RecipeImage src={image1} alt="bild på bouillabaisse" />
      </ImageContainer>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Tillagningstid: <span>60 h</span></p>
          <p>Antal portioner:</p>
          <p>Kategori:</p>
        </CardContent>
        {/* <CardFooter>
          <p>Kategori:</p>
        </CardFooter> */}
        <Button/>
      </Card>
    </>
  );
}

export default RecipeCard;
