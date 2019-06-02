import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

const Card = styled.div``;

const UserCard = ({ name, isFollowing, url, isSelf }) => (
  <Card>
    <Avatar url={url} />
    <FatText text={name} />
    {!isSelf && <Button text={isFollowing ? "UnFollow" : "Follow"} />}
  </Card>
);

UserCard.PropTypes = {
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
