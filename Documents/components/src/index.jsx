import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Morning</h4>
                    Are u sure u want to to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="luiz" timeAgo="Today at 04:45PM" commentText="It was a great thing" avatarImg={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Anna" timeAgo="Today at 09:31AM" commentText="Man what was that?" avatarImg={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="John" timeAgo="Yesterday at 01:00PM" commentText="Amazing, keep it like that" avatarImg={faker.image.avatar()} />
            </ApprovalCard>



        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));

