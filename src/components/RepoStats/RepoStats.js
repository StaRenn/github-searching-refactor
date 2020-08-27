import React from 'react';
import PropTypes from 'prop-types';
import "./style.sass";

RepoStats.propTypes = {
    lastCommit: PropTypes.string,
    starsAmount: PropTypes.number.isRequired
};

function RepoStats({lastCommit, starsAmount}) {
    return (
        <div className="repo-stats">
            <h3 className="stars-amount">
                <span className="stars-amount__span"/>
                Stars: {starsAmount}
            </h3>
            <h3 className="last-commit-date">
                {lastCommit
                    ? `Last commit: ${(new Date(lastCommit)).toDateString()}`
                    : ""}
            </h3>
        </div>
    );
}

export default RepoStats;