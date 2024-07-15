import React, { useState } from "react";

function SocialNetworksPages() {
  const [formValues, setFormValues] = useState({
    behanceUsername: "",
    deviantartUsername: "",
    diggUsername: "",
    dribbbleUsername: "",
    facebookProfileID: "",
    flickrUsername: "",
    githubUsername: "",
    instagramUsername: "",
    lastfmUsername: "",
    linkedinPublicProfileURL: "",
    myspaceUsername: "",
    redditUsername: "",
    soundcloudUsername: "",
    tumblrUsername: "",
    envatoTutsPlusAuthorUsername: "",
    twitterUsername: "",
    vimeoUsername: "",
    youtubeChannelURLorUsername: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formValues);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Social Media Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="behanceUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="behanceUsername"
              name="behanceUsername"
              value={formValues.behanceUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Behance Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="deviantartUsername" className="mb-2">
            </label>
            <input
              type="text"
              id="deviantartUsername"
              name="deviantartUsername"
              value={formValues.deviantartUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Deviantart Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="diggUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="diggUsername"
              name="diggUsername"
              value={formValues.diggUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digg Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dribbbleUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="dribbbleUsername"
              name="dribbbleUsername"
              value={formValues.dribbbleUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dribbble Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="facebookProfileID" className="mb-2">
              
            </label>
            <input
              type="text"
              id="facebookProfileID"
              name="facebookProfileID"
              value={formValues.facebookProfileID}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Facebook Profile ID"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="flickrUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="flickrUsername"
              name="flickrUsername"
              value={formValues.flickrUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Flickr Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="githubUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="githubUsername"
              name="githubUsername"
              value={formValues.githubUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="GitHub Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="instagramUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="instagramUsername"
              name="instagramUsername"
              value={formValues.instagramUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Instagram Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastfmUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="lastfmUsername"
              name="lastfmUsername"
              value={formValues.lastfmUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last.fm Username"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="linkedinPublicProfileURL"
              className="mb-2"
            >
              
            </label>
            <input
              type="text"
              id="linkedinPublicProfileURL"
              name="linkedinPublicProfileURL"
              value={formValues.linkedinPublicProfileURL}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="LinkedIn Public Profile URL"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="myspaceUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="myspaceUsername"
              name="myspaceUsername"
              value={formValues.myspaceUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MySpace Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="redditUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="redditUsername"
              name="redditUsername"
              value={formValues.redditUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Reddit Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="soundcloudUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="soundcloudUsername"
              name="soundcloudUsername"
              value={formValues.soundcloudUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="SoundCloud Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tumblrUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="tumblrUsername"
              name="tumblrUsername"
              value={formValues.tumblrUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tumblr Username"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="envatoTutsPlusAuthorUsername"
              className="mb-2"
            >
             
            </label>
            <input
              type="text"
              id="envatoTutsPlusAuthorUsername"
              name="envatoTutsPlusAuthorUsername"
              value={formValues.envatoTutsPlusAuthorUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Envato Tuts+ Author Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="twitterUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="twitterUsername"
              name="twitterUsername"
              value={formValues.twitterUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Twitter Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="vimeoUsername" className="mb-2">
              
            </label>
            <input
              type="text"
              id="vimeoUsername"
              name="vimeoUsername"
              value={formValues.vimeoUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Vimeo Username"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="youtubeChannelURLorUsername"
              className="mb-2"
            >
            </label>
            <input
              type="text"
              id="youtubeChannelURLorUsername"
              name="youtubeChannelURLorUsername"
              value={formValues.youtubeChannelURLorUsername}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YouTube Channel URL or Username"
            />
          </div>
        </div>
        <div className="flex justify-start mt-4">
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-slate-300 text-slate-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default SocialNetworksPages;