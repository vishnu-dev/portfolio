import React from 'react';
import './ProjectCard.scss';
import {Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography} from "@mui/material";
import {PALETTE} from "../../../constants/Palette";


const ProjectCard = (props) => {
    return (
        <Card style={{backgroundColor: PALETTE.cardBackground}}>
            <CardHeader
                title={props.data.name}
                subheader={<Typography color={PALETTE.textSecondary} fontSize={12}>{props.data.label}</Typography>}
                action={
                    props.data.technologies.map((e, i) => (
                        <Tooltip title={e.split('-')[0]} key={i}>
                            <IconButton size="small" color="info">
                                <i className={"devicon-" + e + " colored"}/>
                            </IconButton>
                        </Tooltip>
                    ))
                }
            />
            <CardMedia component="img" image={props.data.image} height={500}/>
            <CardContent>
                <Typography>
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;
