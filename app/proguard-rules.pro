# This is a configuration file for ProGuard.
# http://proguard.sourceforge.net/index.html#manual/usage.html

-dontusemixedcaseclassnames

# Keep line numbers for debugging
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Preserve all public classes and their public methods
-keep public class * {
    public protected *;
}

# Keep WebView related classes
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep enums
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# Preserve the line numbers and file name for native methods
-keepclasseswithmembers class * {
    native <methods>;
}
