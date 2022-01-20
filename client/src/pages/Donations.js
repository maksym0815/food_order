import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BackgroundContainer, InnerPageContainer, PageContainer } from "../components/PageContainer";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Marginer } from "../components/Marginer";
import { SubmitButton } from "../components/Common";
import { ContentCard } from "../components/ContentCard";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-left: 4em;
  margin-right: 4em;
  margin-bottom: 4em;

`;

export default function Donations(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar/>
      <Marginer direction="vertical" margin="2em"/>
      <Link to="/donation/new">
        <Button size="0.25px">Add Donation</Button>
      </Link>
      <Marginer direction="vertical" margin="2em"/>
      <StyledInnerContainer>
          <ContentCard layout={'column'}>
            <Marginer direction="vertical" margin="1em"/>
            <Link to="/donation/:id/edit">
              <SubmitButton size={"0.25px"}>Edit</SubmitButton>
            </Link>
            <Marginer direction="vertical" margin="1em"/>
            <Link to="/donation/:id/delete">
              <SubmitButton size={"0.25px"}>Delete</SubmitButton>
            </Link>
            <Marginer direction="vertical" margin="2em"/>
          </ContentCard>
       
      </StyledInnerContainer>
    </PageContainer>
  );
}