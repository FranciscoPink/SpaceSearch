# Space Search

🚀 https://space-search.netlify.app/

This application will display images the user searches for from the NASA images database on mobile and desktop devices.

## API
I will be using the public NASA API.

https://api.nasa.gov

```javascript
{
    "date": "2021-08-02",
    "explanation": "Have you heard about the Hubble Ultra-Deep Field?  Either way, you've likely not heard about it like this -- please run your cursor over the featured image and listen!  The Hubble Ultra-Deep Field (HUDF) was created in 2003-2004 with the Hubble Space Telescope staring for a long time toward near-empty space so that distant, faint galaxies would become visible.  One of the most famous images in astronomy, the HUDF is featured here in a vibrant way -- with sonified distances. Pointing to a galaxy will play a note that indicates its approximate redshift. Because redshifts shift light toward the red end of the spectrum of light, they are depicted here by a shift of tone toward the low end of the spectrum of sound.  The further the galaxy, the greater its cosmological redshift (even if it appears blue), and the lower the tone that will be played. The average galaxy in the HUDF is about 10.6 billion light years away and sounds like an F#. What's the most distant galaxy you can find?   Note: Sounds will only play on some browsers.  This week at NASA: Hubble #DeepFieldWeek",
    "media_type": "video",
    "service_version": "v1",
    "title": "The Hubble Ultra Deep Field in Light and Sound",
    "url": "https://apod.nasa.gov/apod/image/1803/AstroSoM/hudf.html"
}
```

## Wireframe 
![Wireframe](https://lh3.googleusercontent.com/uwpRusWpU4HThxWqX0MPYZuQP4RrFfLmBiCuANxp0klZUme4ILLKm-ew3Zs8zVdUY0kpHwhq6OvpFdfHLHSjwIyz2N6HM2qaWtQ-V7FpRLLqMne7djPehjKii_UpNYJpWyJj11fmP0uB4dsg38xID-L7LEzOkT9eNeM2ls_yrCQ1QjmH1ecYqtsIgJUmc7VbCPfUC2CIbkQthDdiRNtdaorKqqO3Lz-Re3OsZr7LT-jz_Mh2vMQRJZNNGqCEAUw2vkQGkOsGK02obzAfcwaIff8F0x9OGKRvo_ItEWJwtagfC9VMnTOT7uK7Laty0aT7fLCQs5c8fa7QgQSM71vA1QhXqzFxwuh2zOPaKEkJMlzT_OIZxJy9JFAbeKmjsNVHQdf9jBQDQoTwHI1e6bwHVVu3XqafbhXrQFb7Qrmxa8IA_Gy_sObKnKJzpZQOSMCdV0IMLn3IVui_I424b_Wl3Z7dXmMpuHThHzJrJOrKSBhP3s4dyC6g83AsmacDHYuK8SSYA063ytTVkavV_j1cuU_r_xFChezkb-EBeaNGd2Ybt692ZVuw2rCxO3AzwfbKceMK1-wwM9D2LV_THfBl5zcjTPa-zS6YSI7cnPcLNDdz7RuOi53WQZCuxU4jfyUDDodLU-UlZmALTK6xFbGVVukdZNtBq3RiFTi-OMiFXfPbfbx0UQ6v3_ETT0hYqgjw4VV0-yGwlLAVT_CY_k9Vdg=w328-h197-no?authuser=0)

## MVP 
- Fetch image and title from NASA's API and display search results.
- Set up media query for smaller devices.
- Use Flexbox to style the website and organize content.
- Deploy on Netlify


## Priority Matrix
![PMatrix](https://lh3.googleusercontent.com/Ep6hVkgxT2-0uIfYOgRSd3C7ENmi3bR5p_5goWQMa3CdIgTU7hmKvLVDUsPV8N5t_jvHRlra0uvi-_AJdTHux4_hjTLHz71Jd1QfiRkI1OjmsWRbXksmSnGyapjFvU8QX5gSiL-LMmeGJm_lRIUamP7qcHLC1kFJUDNA4loLJ5w3OFuc2GlA3Qo70vxTuMdBiZVbz1EMxkzmG4xV7hW0a_w-OS76u-iQsjchamOVf4C26SfoH8aTsIKHmVvku4HPJPtBPpEDfnnfrWg2xaGUgixHhC1iccO76nwPysgEY8HGDywGdKr2rMzWsb5Za1x9rds0P5A_qZzUCx1lHKvk7fDKKhMoY0zLrBT1wlkfMp3qqquSBTCYpK-pomxgrVjphUEn7YVf0pbVadDgI18G4V9uu94goH7MIa_aWoM4xuqLO6-mqjpIc2dNeJ_Sb8njypLhPs0e-x6PDb7R6kKNuksn_V1qzGkySxZ1rzbCp-CEdRACgS5-CU-nX7uqukSwA-bL6_YCmPJwFBZmLrtFfihsdnNXwUAAUcQxN7YbPgwtkbcYhAUUFQF_bGSP2_uMc11bLpzvj3kfH0Vk2AiZXZP5R3mO7C94bNrVXsg9JpvPUB7cEos55dDQrVYi-I73g9gxbO3ylLdnY6vnsPxHd1hLOGms1qNGnAFBCYRuAtNG_uIHucLqrtpGHGgnslr3_axF4TSl9OlT6Yrrxy6v1w=w1588-h1482-no?authuser=0)

## Code snippet
```javasciptt
function displayData(dataArray) {
  dataArray.forEach((result) => {
    let nasaData = `
    <div class="searchResult">
      <img class="resultImg" src="${result.links[0].href}" />
      <h4>${result.data[0].title}</h4>
    </div>
    `;
    results.insertAdjacentHTML("beforeend", nasaData);
  });
}
```