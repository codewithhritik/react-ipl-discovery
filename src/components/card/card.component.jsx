import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className = "card-container">
        <div class="glass"></div>
        <div className = "content">
            <p> Date: { props.post.date } </p>
            <p> Venue: { props.post.venue }, { props.post.city }</p>
            <h2> { props.post.team1 } VS { props.post.team2 } </h2>
            <h3>
                Winner: { props.post.winner }
            </h3>
            <h4> Player of the Match: { props.post.player_of_match } </h4>
        </div>
    </div>
)