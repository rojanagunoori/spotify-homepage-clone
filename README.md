# Spotify Homepage Clone 🎵

[![Website](https://img.shields.io/badge/Website-Live-blue)](https://spotify-homepage-clone-two.vercel.app/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)  
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black)](https://github.com/rojanagunoori/spotify-homepage-clone)

---

![Screenshot 388](<https://github.com/rojanagunoori/spotify-homepage-clone/blob/main/Screenshot%20(388).png?raw=true>)

![Screenshot 389](<https://github.com/rojanagunoori/spotify-homepage-clone/blob/main/Screenshot%20(389).png?raw=true>)

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

## Folder / Project Structure

```bash
spotify-homepage-clone/
│
├─ /app
│ ├─ /api/auth/[...nextauth]/route.js # NextAuth authentication
│ ├─ /login/page.js # Login page
│ ├─ /page.js # Home page
│ ├─ /globals.css # Global styles
│ └─ /not-found.js # 404 page
│
├─ /components
│ └─ PlaylistCard.js # Component for displaying playlists
│
├─ /lib
│ └─ spotify.js # Spotify API helper functions
│
├─ /styles
│ └─ globals.css # Tailwind CSS imports
│
├─ .env.local # Environment variables
└─ package.json


---

## 5. Tech Stack / Environment

- **Frontend & Framework:** Next.js 13 (App Router), React
- **Authentication:** NextAuth.js
- **API:** Spotify Web API
- **Styling:** Tailwind CSS, custom CSS
- **Deployment:** Vercel
- **Other Tools:** npm / yarn, fetch API

---
```

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
   ```

Install dependencies:

```bash
npm install
```

Configure environment variables

Create a .env.local file in the root with the following variables:

```bash

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

---

## Usage

- Click Login with Spotify to authenticate.

- Toggle between Playlists and Saved Tracks views.

- Create new playlists with the "New Playlist" button.

- Play tracks or open them in Spotify via embedded players or links.

---

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

### 1. Open Postman & Create New Request

Click the + tab to create a new request.

In the URL bar, enter:

https://api.spotify.com/v1/me/tracks or https://api.spotify.com/v1/me/playlists

### 2. Go to the Authorization Tab

Click the Authorization tab below the URL bar.

Set Type to OAuth 2.0.

### 3. Get New Access Token

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

### 4. Click Get Token

A browser window will open for Spotify login and authorization.

After approval, Postman receives the access token.

### 5. Click Use Token

This attaches the token automatically as a Bearer token in the headers.

### 6. Click Send

Send the request to test the /me/tracks endpoint.

#### Important Notes

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

---

## Key Components

This project is organized around reusable components and pages to manage Spotify data and provide a seamless user experience:

### PlaylistCard.js

Displays an individual Spotify playlist.
Shows the playlist image, name, number of tracks, owner, and link to Spotify.
Includes an **embedded Spotify preview** using `<iframe>` so users can play the playlist without leaving the app.
Designed with responsive Tailwind CSS to adapt to various screen sizes.

### Example usage:

```bash
<PlaylistCard playlist={playlist} />
```

---

### Login Page

- Handles Spotify authentication using NextAuth.js.
- Users click “Login with Spotify” to authenticate and grant access to their playlists and library.
- Supports `callbackUrl` to redirect users to the homepage after login.
- Includes a clean, responsive login UI with Tailwind CSS styling.

---

### Home Page

- Shows user playlists and saved tracks with toggle buttons to switch views.
- Fetches data from the Spotify Web API using the access token provided by NextAuth.js.
- Users can:
- View playlists with track previews.
- View saved tracks and open them directly in Spotify.
- Save or remove tracks from their library.
- Create new playlists on Spotify directly from the app.
- Includes loading states, error handling, and responsive layout for desktop and mobile.

---

### Spotify API Helpers (`lib/spotify.js`)

- Centralized functions for interacting with the Spotify Web API, such as:
- `getUserPlaylists()` – fetches all playlists of the authenticated user.
- `getUserSavedTracks()` – fetches saved tracks.
- `createPlaylist()` – creates a new playlist.
- `saveTrackToLibrary()` and `removeTrackFromLibrary()` – manage saved tracks.
- Handles **API authentication** using the Bearer token from NextAuth.js.

---

## Security

Security is a key focus for this project, especially when handling user authentication and private Spotify data:

- **Authentication:** All login flows are handled with NextAuth.js, which securely issues JWT tokens for sessions.
- **Sensitive credentials:** The `SPOTIFY_CLIENT_SECRET` and `SPOTIFY_CLIENT_ID` are stored in environment variables (`.env.local`) and never committed to GitHub.
- **API requests:** All calls to the Spotify API use OAuth Bearer tokens, ensuring that user data is accessed securely.
- **Session management:** Access tokens are stored in the JWT and passed to the frontend securely without exposing secrets.
- **HTTPS:** The live deployment on Vercel ensures all communication is over HTTPS.

---

## Challenges Faced During Development

During the development of this project, several technical challenges were encountered:

### 1. Handling Spotify OAuth in Next.js App Router

- Spotify requires OAuth flow with scope and prompt.
- Solved by configuring NextAuth.js correctly with SpotifyProvider and using callbacks to persist the access_token in the JWT.

### 2. Fetching User Playlists and Saved Tracks

- Spotify API limits results (20 playlists / 50 tracks per request).
- Addressed by adding support for pagination and using the limit parameter in API calls.

### 3. Embedding Spotify Tracks and Playlists Responsively

- Iframes for Spotify embeds needed to scale across desktop and mobile.
- Used Tailwind CSS responsive utilities and width="100%" for embedded iframes.

### 4.Merging Tailwind CSS with Custom Styles

- The project has both Tailwind CSS and custom global CSS.
- Ensured Tailwind base, components, and utilities are loaded before custom styles to avoid style conflicts.

### 5. Error Handling

- API calls could fail if tokens expired.
- Implemented try/catch blocks and user-friendly error messages.

---

## Future Improvements

The project is functional but has room for enhancements:

### 1. Pagination

- Fetch more playlists and saved tracks beyond default API limits.
- Implement infinite scroll or “Load More” buttons.

### 2. Playlist Editing

- Add/remove tracks from playlists directly inside the app.
- Update playlist descriptions or names from the UI.

### 3. Search Functionality

- Allow users to search Spotify for tracks, albums, or playlists.
- Add search results display with preview and save options.

### 4. Mobile Optimization

- Improve layout and responsiveness for smaller screens.
- Enhance touch interactions for buttons and embedded previews.

### 5. Dark/Light Mode Toggle

- Enable users to switch themes for accessibility and preference.
- Use Tailwind CSS dark mode utilities for smooth transitions.

### 6. Performance Enhancements

- Lazy load embedded Spotify iframes to reduce initial page load.
- Cache API requests where possible.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Description"`)
5. Push to the branch (`git push origin feature-name`)
6. Open a Pull Request

---

## Acknowledgments

- Next.js
  for the framework
- NextAuth.js
  for authentication
- Spotify Web API
  for fetching music data
- Tailwind CSS for styling inspiration
- Personal inspiration from Spotify Web Player UI

---

## License

This project is licensed under the MIT License. See LICENSE
for details.

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---
