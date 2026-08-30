package com.jeevan.darpan

import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        configureWebView()
        loadContent()
    }

    private fun configureWebView() {
        val settings = webView.settings
        
        // Enable JavaScript
        settings.javaScriptEnabled = true
        
        // Enable DOM Storage
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        
        // Enable Local Storage
        settings.setAppCacheEnabled(true)
        settings.cacheMode = WebSettings.LOAD_DEFAULT
        
        // Improve rendering
        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true
        
        // Allow mixed content for development
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        
        // Enable debugging in development
        WebView.setWebContentsDebuggingEnabled(true)
    }

    private fun loadContent() {
        webView.loadUrl("file:///android_asset/index.html")
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
