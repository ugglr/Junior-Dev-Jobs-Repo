import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Directories extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const comps = [
      {
        name: "AngelList",
        body:
          "This is the main site where startups go to look for new talent, and because of that It is also one of the best places for juniors to reach out to potential employers.Start - up culture breeds and needs people with many skill sets, ambitious character and a get things done attitude.If you are willing to do the work and show them what you've made of, there is a good chance to grab that first position on this site.",
        url: "https://angel.co",
      },
      {
        name: "Reactiflux",
        body:
          "I truly recommend to join their Discord server, because there you have the potential to send messages directly to the person at the hiring company.That gives you an edge over regular job applications where the stacks of CVs grow larger by the day.By talking directly you have the chance to show your personality and proffessionalism directly.",
        url: "http://jobs.reactiflux.com/",
      },
      {
        name: "WeWorkRemotely",
        body:
          "One of the biggest Remote jobs directory on the web, and unfortunately most positions require experience.The competition is fierce and when applying you have to make sure to stand out in an extraordinary way, becuase when a junior job position is posted it will be getting flooded with applicants.",
        url: "https://weworkremotely.com/",
      },
      {
        name: "Stackoverflow Jobs",
        body:
          "Any company who posts an advert to stackoverflow is pretty legit due to the steep fees involved in order to advertise on the platform. Fierce competition, as the site is very well known.",
        url: "https://stackoverflow.com/jobs",
      },
      {
        name: "Github Jobs",
        body: "",
        url: "https://jobs.github.com/",
      },
      {
        name: "Codepen Jobs",
        body: "",
        url: "https://codepen.io/jobs/",
      },
      {
        name: "Remotive",
        body:
          "This site is fully dedicated to remote positions in many categories, they also offer an option to join the slack community for a one time fee.",
        url: "https://remotive.io/",
      },
      {
        name: "RemoteOk",
        body:
          "As the name implied the whole site is fully dedicated to remote listings.",
        url: "https://remoteok.io/",
      },
      {
        name: "Hubstaff Talent Jobs",
        body: "",
        url: "https://talent.hubstaff.com",
      },
      {
        name: "Authentic Jobs",
        body: "",
        url: "https://authenticjobs.com/",
      },
      {
        name: "Just UX Jobs",
        body: "",
        url: "https://justuxjobs.com/",
      },
      {
        name: "Jobspresso",
        body: "",
        url: "https://jobspresso.co/",
      },
      {
        name: "Findwork.dev",
        body: "",
        url: "https://findwork.dev/junior-jobs?remote=true",
      },
      {
        name: "Remote Leads",
        body: "",
        url: "https://remoteleads.io/",
      },
      {
        name: "Outsourcely",
        body: "",
        url: "https://www.outsourcely.com/",
      },
      {
        name: "Working Nomads",
        body:
          "Good amount of listings, including positions for juniors, good use of filters.",
        url: "https://www.workingnomads.co",
      },
      {
        name: "Remote Circle",
        body:
          "Filter remote openings based on your time zone. They have a fair amount of jobs there and is worth taking a look at.",
        url: "https://remotecircle.com/",
      },
      {
        name: "Turingly",
        body:
          "This is not a jobs directory, but you can prove you coding skills through the site and land a job that way, even though you don't have official experience in Software Development",
        url: "https://www.turing.ly",
      },
    ]

    const freelance = [
      {
        name: "UpWork",
        body:
          "Might be the most popular freelancing site in the world and have been the go to place for a long time for developers looking to kickstart their freelancing career. However, recently there are reportings that it's increasingly difficult to get accepted by UpWork to start making proposals to clients.",
        url: "https://www.upwork.com",
      },
      {
        name: "Freelancer",
        body:
          "According to the site, they are the largest freelancing site in the World. ",
        url: "https://www.freelancer.com",
      },
      {
        name: "Guru",
        body: "",
        url: "https://www.guru.com",
      },
      {
        name: "Fiverr",
        body: "",
        url: "https://www.fiverr.com",
      },
      {
        name: "Workana",
        body: "",
        url: "https://www.workana.com",
      },
    ]

    const slackChannels = [
      {
        name: "Remotive",
        body:
          "Payed community, but active and friendly, the founder is always out looking for new companies and quite a bit of recruiting people are sitting in the channels.",
        url: "https://remotive.io/community",
      },
      {
        name: "CodingCoach",
        body:
          "Not so much a community for job-hunting but a great place to find help from more experienced software developers.",
        url:
          "https://join.slack.com/t/coding-coach/shared_invite/enQtNDYxNTcwMjk4MDcwLThiZjY1MTM2YTU1YzM2MGI1N2Y1NDI3ZGM1MGRhNjdiZjU0MzE1YjMxZjdlZmVlNDdhNmFhN2RhNGIxZmE1YTI",
      },
      {
        name: "DevChat",
        body:
          "Join the jobs channel and keep a look-out. Also a place where it's possible to ask for help when stuck.",
        url: "https://devchat.devolio.net/",
      },
      {
        name: "Scotch.io",
        body:
          "Join the jobs channel and keep a look-out. Also a place where it's possible to ask for help when stuck.",
        url: "https://scotch-slack.herokuapp.com/",
      },
    ]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="List of remote junior developer jobs directories" />
        <div>
          <ul style={{ listStyle: "none" }}>
            {comps.map(comp => {
              return (
                <>
                  <li>
                    <h5>{comp.name}</h5>
                    <p>{comp.body}</p>
                    <strong>Link: </strong>
                    <a href={comp.url}>{comp.url}</a>
                  </li>
                  <hr />
                </>
              )
            })}
          </ul>
        </div>
        <hr />

        <h2>Freelance Platforms</h2>

        <ul style={{ listStyle: "none" }}>
          {freelance.map(site => {
            return (
              <>
                <li>
                  <h5>{site.name}</h5>
                  <p>{site.body}</p>
                  <strong>Link: </strong>
                  <a href={site.url}>{site.url}</a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>

        <hr />

        <h2>Slack Communities</h2>

        <ul style={{ listStyle: "none" }}>
          {slackChannels.map(channel => {
            return (
              <>
                <li>
                  <h5>{channel.name}</h5>
                  <p>{channel.body}</p>
                  <strong>Link: </strong>
                  <a href={channel.url}>{channel.url}</a>
                </li>
                <hr />
              </>
            )
          })}
        </ul>

        <hr />
      </Layout>
    )
  }
}

export default Directories

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`