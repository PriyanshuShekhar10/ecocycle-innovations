import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./Tile.css";

export default function Tile() {
  return (
    <div className="tiles">
      <MDBCard className="tile">
        <MDBCardBody>
          <MDBCardTitle> title </MDBCardTitle>
          <MDBCardText>
            New consumers purchasing pattern is almost 79% consumers are
            changing their purchase preference based on social and environmental
            impact as per the study report by Capgemini Research Institute
          </MDBCardText>
          <MDBBtn href="#">Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="tile tile-center">
        <MDBCardBody>
          <MDBCardTitle> title </MDBCardTitle>
          <MDBCardText>
            New consumers purchasing pattern is almost 79% consumers are
            changing their purchase preference based on social and environmental
            impact as per the study report by Capgemini Research Institute
          </MDBCardText>
          <MDBBtn href="#">Get Started</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="tile">
        <MDBCardBody>
          <MDBCardTitle> title </MDBCardTitle>
          <MDBCardText>
            New consumers purchasing pattern is almost 79% consumers are
            changing their purchase preference based on social and environmental
            impact as per the study report by Capgemini Research Institute
          </MDBCardText>
          <MDBBtn href="#">Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
