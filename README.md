# Spotify Homepage Clone

A React/Next.js app that mimics the Spotify homepage, allowing users to authenticate with Spotify, view their playlists and saved tracks, and interact with their library.

**Live Demo:** [https://spotify-homepage-clone-two.vercel.app/](https://spotify-homepage-clone-two.vercel.app/)  
**GitHub Repo:** [https://github.com/rojanagunoori/spotify-homepage-clone](https://github.com/rojanagunoori/spotify-homepage-clone.git)

---

## Features

- User authentication with Spotify via **next-auth**.
- Fetch and display user's playlists.
- Fetch and display user's saved tracks.
- Create new playlists.
- Save and remove tracks from the user's Spotify library.
- Embedded Spotify players for playlists and tracks.
- Clean, dark-themed UI.

---

## Technologies Used

- React 18 / Next.js 13 (App Router)
- next-auth for authentication
- Spotify Web API for music data
- CSS modules with custom styles
- React hooks (`useState`, `useEffect`)

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Spotify Developer account with a registered app to get **Client ID** and **Client Secret**

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/rojanagunoori/spotify-homepage-clone.git
   cd spotify-homepage-clone
Install dependencies:

npm install
Configure environment variables

Create a .env.local file in the root with the following variables:


SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_URL=http://localhost:3000
Run the development server:

npm run dev
Open http://localhost:3000 to view the app.

Project Structure
app/ - Next.js app directory

components/PlaylistCard.js - Component for displaying playlists

lib/spotify.js - Spotify API utility functions

styles/globals.css - Global CSS styles

Usage
Click Login with Spotify to authenticate.

Toggle between Playlists and Saved Tracks views.

Create new playlists with the "New Playlist" button.

Play tracks or open them in Spotify via embedded players or links.

## Spotify Developer App Setup

To use this app, you need to create a Spotify Developer app to get your **Client ID** and **Client Secret**.

### Steps to Create Spotify Developer App

1. Go to the [Spotify Web API Dashboard](https://developer.spotify.com/dashboard/applications).

2. Log in with your Spotify account.

3. Click **Create an App**.

4. Fill out the app name and description, then click **Create**.

5. On your app page, you'll see your **Client ID** and **Client Secret**.

6. Click **Edit Settings** and add your app's redirect URI(s), for example:

http://localhost:3000/callback

markdown
Copy
Edit

7. Save the settings.

### Using Your Credentials

Add the `Client ID` and `Client Secret` to your `.env.local` file in the project root:


### Testing Spotify API with Postman
You can manually test Spotify API endpoints (like /me/tracks) using Postman:

## 1. Open Postman & Create New Request
Click the + tab to create a new request.

In the URL bar, enter:


https://api.spotify.com/v1/me/tracks  or https://api.spotify.com/v1/me/playlists
## 2. Go to the Authorization Tab
Click the Authorization tab below the URL bar.

Set Type to OAuth 2.0.

## 3. Get New Access Token
Click Get New Access Token.

Fill out the popup form with your Spotify app credentials and settings:

| Field               | Value                                                                             |
| ------------------- | --------------------------------------------------------------------------------- |
| Token Name          | Any name (e.g. SpotifyToken)                                                      |
| Grant Type          | Authorization Code                                                                |
| Callback URL        | Same as your Spotify app redirect URI (e.g. `http://localhost:3000/callback`)     |
| Auth URL            | `https://accounts.spotify.com/authorize`                                          |
| Access Token URL    | `https://accounts.spotify.com/api/token`                                          |
| Client ID           | Your Spotify Client ID                                                            |
| Client Secret       | Your Spotify Client Secret                                                        |
| Scope               | `user-library-read user-library-modify`                                           |
| State / Client Auth | Leave state empty; choose **Send as Basic Auth header** for client authentication |


## 4. Click Get Token
A browser window will open for Spotify login and authorization.

After approval, Postman receives the access token.

## 5. Click Use Token
This attaches the token automatically as a Bearer token in the headers.

## 6. Click Send
Send the request to test the /me/tracks endpoint.

### Important Notes
Make sure your Spotify app's Redirect URI matches the Callback URL used in Postman.

Use a Spotify account that has saved tracks for meaningful data.

Example Access Token Response from Your App
You can get a valid access token from your app’s session API:


GET https://spotify-homepage-clone-two.vercel.app/api/auth/session
Example JSON response:


{
  "user": {
    "name": "example",
    "email": "example@gmail.com"
  },
  "expires": "2025-06-28T04:00:25.525Z",
  "accessToken": "BQBht0j0vFtAOXREDtN93PQIAOZSq19K3OJlSJoVPs54IRVInMwID1IjpXEeebjFbP8gsdZL2GiPDsmdGvI12xlFodyAfjJP6kJcz3jAWIxVf_1PQOUVSPOHN2JTJ2MZTUOH4NTRHGoiQyvwgKMbDnSjdRvY6d-yFifZPRMDgxlZF2_aEKukfhzOsCM-FWPFPxbLSZrqAaeJI3y-H6Ft4I0ryoJBqVN91F6G5i5xnqVtyt4mtQvNhnQCAsNevzyN"
}
You can use this accessToken as a Bearer token in Postman to test Spotify endpoints without going through OAuth flow each time.

### License
MIT License

