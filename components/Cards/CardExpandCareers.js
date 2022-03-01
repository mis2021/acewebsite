import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Parser from "html-react-parser";
import { maxHeight, padding } from "@mui/system";
import ScrollContent from "components/modals/ScrollContent";
import { deviceDetect, isBrowser, isMobile } from "react-device-detect";
import { FormatAlignJustifyRounded } from "@mui/icons-material";
import { useRouter } from 'next/router'

const ExpandMore = styled((props) => {
  
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const renderContent = () => {
  if (isMobile == true) {
    return true;
  }
  return false;
};

export default function CardExpand(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleClick =()=>{
  //   console.log("click")

  // }

  //   const mobileVer = { maxWidth: 475, width:400, marginTop: '20px', maxHeight: 450, height: 400 };
  //   const desktopVer = { maxWidth: 975, width:800, marginTop: '20px', maxHeight: 450, height: 400 };

  // const ifMobile = ()=>{
  //     if (isMobile) {
  //         return "{ maxWidth: 475, width:400, marginTop: '20px', maxHeight: 450, height: 400 }";
  //     } else {
  //         return "{ maxWidth: 975, width:800, marginTop: '20px', maxHeight: 450, height: 400 }";
  //     }
  // }
  console.log("Mobile? - " + isMobile);
  const router = useRouter()
  return (
    <center>
      <Card
        sx={
          // isBrowser? { maxWidth: 860, width:800, marginTop: '20px', maxHeight: 450, height: 400 }:
          // { maxWidth: 480, width: 400, marginTop: '20px', maxHeight: 650, height: '90%' }
          // isMobile?{ maxWidth: 460, width:340, marginTop: '20px', maxHeight: 450, height: 400 }:
          // { maxWidth: 860, width:800, maginTop: '20px', maxHeight: 450, height: 400 }
          {
            maxWidth: 800,
            width: "70vw",
            textAlign: "center",
            marginLeft: "-18vw",
            marginRight: "-18vw",
            maxHeight: 570,
            height: "90%",
            justifyContent: "center",
          }
        }
      >
        <CardHeader
        // avatar={
        //   props.icon ?
        //     <img
        //       style={{width: 60}}
        //       src={props.icon}
        //     />
        //     :
        //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //       A
        //     </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        // sx={{fontWeight: 'bold'}}
        // title={props.title || "ACEMC-BOHOL FACILITY"}
        // subheader="September 14, 2016"
        />
        {/* <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      /> */}
        <CardContent sx={isBrowser ? { height: "30%" } : { height: "40%" }}>
          <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
            {props.title || "ACEMC-BOHOL FACILITY"}
          </h1>
          {/* <h1>{isMobile==true?"true":"false"}</h1> */}
          <br />
          <Typography variant="body2" color="text.secondary">
            <p style={{ textAlign: "justify", paddingLeft: "40px" }}>
              {Parser(props.content) || "No description available"}
            </p>
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing sx={{ marginBottom: 0 }} >
        {
          props.content ?
            <div style={{paddingLeft:'85%',paddingTop:'20px'}}>
            <ScrollContent
              title={props.title || "ACEMC-BOHOL FACILITY"}
              content={props.content}
            />
            </div>
            : <></>
        }
      </CardActions> */}
        <CardActions>
          <Button onClick={() => router.push(`/careers/${props.id}`)} variant="contained" size="medium">Apply Now!</Button>
        </CardActions>
      </Card>
    </center>
  );
}
