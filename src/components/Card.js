import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import RepoStats from "./RepoStats/RepoStats";

export const Card = ({props}) => {

    const lastCommit = props.pushed_at;
    const starsAmount = props.stargazers_count;
    const repositoryTitle = props.full_name;
    const repositoryLink = props.html_url;
    const repositoryId = props.id;

    return(
        <div className="main-page__repository-list__card">
            <Link to={`/repository/${repositoryId}`} className="repository-title">{repositoryTitle}</Link>
            <RepoStats starsAmount={starsAmount} lastCommit={lastCommit} />
            <a href={repositoryLink} className="main-page__repository-list__card__repository-link">{repositoryLink}</a>
        </div>
    )
}

Card.propTypes = {
    props: PropTypes.shape = {
        stargazers_count: PropTypes.number.isRequired,
        full_name: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        pushed_at: PropTypes.string.isRequired
    }
}