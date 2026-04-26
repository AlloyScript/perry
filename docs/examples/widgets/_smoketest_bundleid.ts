// platforms: macos, linux, windows
// targets: ios-widget, android-widget
// widget-bundle-id: com.example.perry-doctest-bundleid
// run: false
//
// Smoke-test: verifies the doc-tests harness correctly plumbs --app-bundle-id
// for widget cross-compile targets.  On a host without Xcode or Android NDK
// the harness will report XCOMPILE_SKIP (missing toolchain), not a failure.
// Without the `widget-bundle-id` directive above the harness reports
// XCOMPILE_SKIP (missing directive) rather than crashing or building with a
// wrong default bundle-id.

import { Widget } from "perry/widget";

Widget({
  kind: "perry.smoketest",
  body: "Hello from the bundle-id smoke test",
});
