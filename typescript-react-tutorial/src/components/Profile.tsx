import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

const Profile: React.SFC<Props> = ({ name, job }: Props) => (
  <div>
    <h1>プロフィール</h1>
    <div>
      <b>お名前: </b>
      {name}
    </div>
    <div>
      <b>職業: </b>
      {job}
    </div>
  </div>
);

export default Profile;
