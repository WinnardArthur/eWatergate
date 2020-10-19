import React, { Component } from 'react';
import FeedpageProfile from '../Profile/feedpage_profile';
import FeedpageWaterPlatform from '../FeedPage_WaterPlatforms/feedpage_waterplatform';
import FeedpageRecentActivities from '../FeedpageRecentActivities/feedpage_recentactivities';
import './feedpage_leftsidebar';

export class FeedpageLeftSidebar extends Component {
    render() {
        return (
            <div className="feedpage-leftsidebar">
                <div>
                    <FeedpageProfile />
                </div>
                <div>
                    <FeedpageWaterPlatform/>
                </div>
                <div>
                    <FeedpageRecentActivities/>
                </div>
            </div>
        )
    }
}

export default FeedpageLeftSidebar
