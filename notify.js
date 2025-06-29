<html>

<!-- Real-time Notification Bar Widget -->
<div id="notification-widget-container"></div>
<script>
(function() {
  console.log('Real-time notification widget script starting...');
  
  // Prevent multiple widget loads
  if (document.getElementById('notification-widget-iframe')) {
    console.log('Widget already loaded, skipping...');
    return;
  }
  
  var container = document.getElementById('notification-widget-container');
  if (!container) {
    console.error('Container element with id "notification-widget-container" not found!');
    console.log('Make sure you have this div in your HTML: <div id="notification-widget-container"></div>');
    return;
  }
  
  console.log('Container found, creating iframe...');
  
  // Create iframe
  var iframe = document.createElement('iframe');
  iframe.id = 'notification-widget-iframe';
  iframe.src = 'https://sticky-header-scribe.lovable.app/widget?message=%F0%9F%8E%89%20Admissions%20Open%20From%20PRE-KG%20to%20VIII%20std.%3Ca%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCkCdow8fB9WLcDik7p-gGkw%22%3EMore%20Details%3C%2Fa%3E&visible=true';
  iframe.style.cssText = 'width:100%;height:60px;border:none;margin:0;padding:0;display:block;position:fixed;top:0;left:0;right:0;z-index:999999;background:transparent;';
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowtransparency', 'true');
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
  
  console.log('Real-time iframe created with src:', iframe.src);
  
  // Show/hide based on visibility setting
  if (!true) {
    iframe.style.display = 'none';
    console.log('Widget set to hidden via visibility setting');
  } else {
    // Add body padding when visible
    if (document.body) {
      document.body.style.paddingTop = '60px';
      document.body.style.transition = 'padding-top 0.3s ease';
    }
    console.log('Widget visible, added body padding');
  }
  
  // Handle messages from iframe
  function handleWidgetMessage(event) {
    // Verify origin for security
    if (event.origin !== 'https://sticky-header-scribe.lovable.app') {
      console.log('Message from unauthorized origin:', event.origin);
      return;
    }
    
    console.log('Received message from widget:', event.data);
    
    if (event.data && event.data.type === 'widget-close') {
      console.log('Widget close requested');
      iframe.style.display = 'none';
      if (document.body) {
        document.body.style.paddingTop = '0px';
      }
    }
    
    if (event.data && event.data.type === 'widget-ready') {
      console.log('Widget ready, height:', event.data.height);
    }
  }
  
  // Add event listener
  if (window.addEventListener) {
    window.addEventListener('message', handleWidgetMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', handleWidgetMessage);
  }
  
  // Error handling
  iframe.onload = function() {
    console.log('Real-time iframe loaded successfully');
  };
  
  iframe.onerror = function() {
    console.error('Failed to load real-time notification widget iframe');
  };
  
  // Append iframe to container
  container.appendChild(iframe);
  console.log('Real-time iframe appended to container');
  
})();
</script>

<!-- Note: This widget automatically syncs with your Supabase database for real-time updates across all devices -->

</html>