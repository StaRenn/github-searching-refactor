import React from 'react';
import PropTypes from 'prop-types';
import "./style.sass"

RepoMainInfo.propTypes = {
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    languages: PropTypes.array,
    description: PropTypes.string,
    contributors: PropTypes.array
};

function RepoMainInfo({avatar_url, html_url, login, languages, description, contributors}) {

    const getLanguagesList = () => {
        if (Object.keys(languages).length === 0 || languages.message) {
            return <h3 className="repository__main-info__info-block__languages__language">No languages yet</h3>
        }
        return Object.keys(languages).map(key => {
            return <h3 className="repository__main-info__info-block__languages__language">{key}</h3>
        })
    }

    const getRepositoryDescription = () => {
        if (!description) return "No description yet";
        return description
    }

    const getTopContributors = () => {
        if (!contributors || contributors.message) {
            return <h3 className={"repository__main-info__info-block__contributors__no-contributors"}>No contributors yet</h3>
        }
        return (
            <div className="repository__main-info__info-block__contributors">
                <h3 className="repository__main-info__info-block__contributors__total">Top 10 contributors</h3>
                {contributors.slice(0,10).map(contributor => {
                    return <a
                        href={contributor.html_url}
                        className="repository__main-info__info-block__contributors__contributor-login"
                    >{contributor.login}</a>
                })}
            </div>
        )
    }

    return (
        <div className={"repository__main-info"}>
            <div className="repository__main-info__profile">
                <img className={"repository__main-info__profile__picture"} src={avatar_url} alt={""}/>
                <a href={html_url} className={"repository__main-info__profile__owner"}>{login}</a>
            </div>
            <div className="repository__main-info__info-block">
                <div className="repository__main-info__info-block__languages">
                    {getLanguagesList()}
                </div>
                <p className="repository__main-info__info-block__description">
                    {getRepositoryDescription()}
                </p>
                {getTopContributors()}
            </div>
        </div>
    );
}

export default RepoMainInfo;