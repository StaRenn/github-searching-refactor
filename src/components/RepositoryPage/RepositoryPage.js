import React from 'react';
import PropTypes from 'prop-types';
import {useFetch, catchApiRateLimit} from "../../helpers";
import ReactLoading from "react-loading";
import RepoStats from "../RepoStats/RepoStats";
import RepoMainInfo from "../RepoMainInfo/RepoMainInfo";
import "./style.sass";

export const RepositoryPage = ({id}) => {

    const repositoryInfo = useFetch(`https://api.github.com/repositories/${id}`);
    const languages = useFetch(`https://api.github.com/repositories/${id}/languages`);
    const contributors = useFetch(`https://api.github.com/repositories/${id}/contributors`);

    const getBody = () => {

        const apiRateLimitExceeded = catchApiRateLimit(repositoryInfo);
        if(apiRateLimitExceeded) return apiRateLimitExceeded

        return(
            <div className={`repository-page`}>
                <div className="repository-page__card">
                    <div className="repository-page__card__info">
                        <h1 className="repository-title">{repositoryInfo.full_name}</h1>
                        <RepoStats starsAmount={repositoryInfo.stargazers_count} lastCommit={repositoryInfo.pushed_at} />
                        <RepoMainInfo
                            html_url={repositoryInfo.owner.html_url}
                            avatar_url={repositoryInfo.owner.avatar_url}
                            login={repositoryInfo.owner.login}
                            languages={languages}
                            description={repositoryInfo.description}
                            contributors={contributors}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return(repositoryInfo && languages && contributors
        ? getBody()
        : <div className={"loading-screen"}>
            <ReactLoading type={"spinningBubbles"} color={"#24292E"} height={100} width={100} />
        </div>)
}

RepositoryPage.propTypes = {
    id: PropTypes.string.isRequired
}