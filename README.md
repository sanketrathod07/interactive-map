# Interactive Map

![Project Screenshot](https://res.cloudinary.com/dq8b6vgab/image/upload/v1739027668/Screenshot_2025-02-08_202826_nfnsja.png)
![Project Screenshot](https://res.cloudinary.com/dq8b6vgab/image/upload/v1739027679/Screenshot_2025-02-08_202803_wvxbwu.png)

## Overview

Interactive Map is a dynamic web application that allows users to click on a map to place a marker dynamically. The marker displays an informative popup with user details and coordinates. This project utilizes **React**, **Leaflet.js**, and **OpenStreetMap** for an engaging user experience.

## Features

- **Dynamic Marker Placement**: Click anywhere on the map to reposition the marker.
- **Custom Popups**: Display user profile image, name, and portfolio link.
- **Real-time Coordinates**: Show updated latitude and longitude upon marker movement.
- **Responsive Design**: Works seamlessly across various screen sizes.

## Tech Stack

- **Frontend**: React.js
- **Mapping Library**: Leaflet.js
- **Styling**: Plain CSS
- **Data Source**: OpenStreetMap

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/sanketrathod07/interactive-map.git
   ```
2. Navigate to the project directory:
   ```sh
   cd interactive-map
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage

- Open the application in your browser.
- Click anywhere on the map to move the marker.
- The popup will update with the new location coordinates.
- Click the close button to dismiss the popup.

## Project Structure

```
interactive-map/
├── public/
│   ├── index.html
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── MapComponent.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
├── package.json
├── README.md
```

## Contributing

Feel free to submit pull requests or report issues.

## License

This project is licensed under the MIT License.

## Developed by Sanket Rathod
