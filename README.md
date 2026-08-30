# JeevanDarpan

**A Vedic Astrology Kundli Calculator for Android**

JeevanDarpan is a native Android application that provides foundational Kundli (birth chart) calculations based on Vedic astrology principles. The app features a beautiful Green + Gold design and uses WebView to deliver a responsive, interactive interface.

---

## Features

- 📱 **Native Android App** with Kotlin
- 🌐 **WebView-based Interface** with JavaScript support
- 💾 **Local Storage** for caching Kundli calculations
- 🎨 **Green + Gold Theme** inspired by Vedic traditions
- ⚡ **Offline Support** - Works without internet
- 📊 **12-House Kundli Display** with planetary positions
- 💚 **Material Design** for intuitive UX

---

## Project Structure

```
JeevanDarpan/
├── app/
│   ├── src/main/
│   │   ├── kotlin/com/jeevan/darpan/
│   │   │   └── MainActivity.kt
│   │   ├── res/
│   │   │   ├── layout/
│   │   │   │   └── activity_main.xml
│   │   ��   └── values/
│   │   │       ├── colors.xml
│   │   │       ├── strings.xml
│   │   │       └── themes.xml
│   │   ├── assets/
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── script.js
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts
├── settings.gradle.kts
├── build.gradle.kts
└── gradle.properties
```

---

## Technical Specifications

| Component | Version |
|-----------|---------|
| **Android Gradle Plugin** | 8.6.1 |
| **Gradle** | 8.7 |
| **JDK** | 17 |
| **Compile SDK** | 35 |
| **Target SDK** | 35 |
| **Min SDK** | 24 (Android 7.0) |
| **Kotlin** | 1.9.23 |

---

## Build Instructions

### Prerequisites

- **JDK 17** - [Download from Oracle](https://www.oracle.com/java/technologies/downloads/)
- **Android SDK** - Use Android Studio or download separately
- **Gradle 8.7** - Automatically used by the build system

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/suryavanshijitendra111-dev/JeevanDarpan.git
   cd JeevanDarpan
   ```

2. **Build the APK**
   ```bash
   gradle --no-daemon assembleDebug
   ```

3. **Output**
   The debug APK will be generated at:
   ```
   app/build/outputs/apk/debug/app-debug.apk
   ```

4. **Install on Device**
   ```bash
   adb install app/build/outputs/apk/debug/app-debug.apk
   ```

### Using Android Studio

1. Open the project in Android Studio
2. Select **Build > Build Bundle(s) / APK(s) > Build APK(s)**
3. Wait for the build to complete
4. APK will be located in `app/build/outputs/apk/debug/`

---

## WebView & JavaScript Support

The app includes full WebView support for:

✅ **JavaScript Execution**
```javascript
// Script runs within the WebView context
document.addEventListener('DOMContentLoaded', () => {
    console.log('WebView loaded');
});
```

✅ **DOM Storage (localStorage)**
```javascript
// Persist data across sessions
localStorage.setItem('kundli_cache', JSON.stringify(data));
const cached = localStorage.getItem('kundli_cache');
```

✅ **Database Support**
```javascript
// IndexedDB is also available
const db = indexedDB.open('jeevan_darpan', 1);
```

---

## Architecture Notes

### Kundli Calculation Foundation

The current implementation provides a **foundational structure** for Kundli calculations. This includes:

- 12-house layout with Rashi (zodiac sign) assignments
- Placeholder planet positions
- Birth data storage and caching
- DOM rendering framework

### Ephemeris Engine (Separate Module)

**Accurate planetary calculations** require:
- Ephemeris data (JPL DE430, SWISSEPH, etc.)
- Complex astronomical algorithms
- Coordinate transformations
- Time zone and DST handling

These are intentionally kept **separate** to allow for:
- Independent testing and validation
- Easy integration of accurate ephemeris libraries
- Modularity and maintainability

### Planned Integration

Future versions will integrate:
- [Swiss Ephemeris](https://www.astro.com/swisseph/) library
- JPL ephemeris data
- Sidereal zodiac calculations
- Naksatra (lunar mansion) computations

---

## Permissions Required

The app requests the following Android permissions:

- `INTERNET` - For future cloud features
- `ACCESS_NETWORK_STATE` - To detect connectivity

See `AndroidManifest.xml` for details.

---

## API & Theme Colors

### Primary Colors

```css
--color-green: #2D5016   /* Vedic Green */
--color-gold:  #D4AF37   /* Prosperity Gold */
--color-dark:  #1a1a1a   /* Deep Black */
```

### Build System

- **Gradle**: 8.7 with Kotlin DSL
- **Plugins**: 
  - Android Gradle Plugin 8.6.1
  - Kotlin Android Plugin 1.9.23
  - AndroidX libraries (latest)

---

## Dependencies

```kotlin
// Core Android
androidx.core:core:1.13.1
androidx.appcompat:appcompat:1.7.0

// Material Design
com.google.android.material:material:1.12.0

// Layout
androidx.constraintlayout:constraintlayout:2.1.4

// WebView
androidx.webkit:webkit:1.8.0
```

---

## License

This project is provided as-is for educational and personal use. Vedic astrology calculations should be verified against authoritative sources.

---

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

---

## Support

For issues, questions, or feature requests:
- Open an [Issue](https://github.com/suryavanshijitendra111-dev/JeevanDarpan/issues)
- Check existing discussions

---

## Acknowledgments

- **Vedic Astrology Foundation** - Classical principles
- **Android Community** - Best practices and libraries
- **Material Design** - UI/UX guidelines

---

**JeevanDarpan** - *"Window into Life's Journey"* 🌿✨

*Last updated: 2025*
