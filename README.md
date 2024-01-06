<div align="center">
    <h1 align="center">Vue Content Skeleton Loader</h1>
    <p align="center">
        Create visually appealing loading skeletons with animations that seamlessly integrate with your app's aesthetics
        and provide a delightful user experience.
    </p>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXA0Mjc0Mzh0cGU0c3RqYmt4ZXpxNzM0c3ppbzAycDJqZjZxZ29hYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WHayPi9eE3HW8pz7xa/giphy.gif" alt="Animated GIF" style="style="width: 500px; height: 528.634px; left: 0px; top: 0px; opacity: 1;">
</div>

## Basic Usage

Install via one of:

```bash
npm install vue-content-loading-skeleton
```

```tsx
import VueSkeletonLoader from 'vue-content-skeleton-loader';
import 'vue-content-skeleton-loader/dist/style.css';

<VueSkeletonLoader type="text"></VueSkeletonLoader>
```

## Guid

Skeleton loader provides a simple solution to provide loading variables in your application. \
It prepares the user for content while data is fetched from the server or loaded asynchronously.

## Props

### `Skeleton` only

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Values</th>
            <th>Default</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                loading
            </td>
            <td align="center">
                <code>true</code>
                <code>false</code>
            </td>
            <td align="center">
                <code>true</code>
            </td>
            <td align="center">
                <code>Boolean</code>
            </td>
        <tr>
            <td colspan="4">
                If it is true, the skeleton loader will be displayed.
            </td>
        </tr>
        <tr>
            <td>
                type
            </td>
            <td align="center">
                <code>text</code>
                <code>avatar</code>
                <code>image</code>
                <code>button</code>
                <code>chip</code>
                <code>chip</code>
                <code>divider</code>
            </td>
            <td align="center">
                <code>text</code>
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                It is a string that specifies the type and number of your skeleton, such as <code>text@4</code>,
                the value before <code>@</code> specifies the type of skeleton and the value after that specifies the number, 
                and if only the type is written, the value is one.
            </td>
        </tr>
        <tr>
            <td>
                animation
            </td>
            <td align="center">
                <code>wave</code>
                <code>fade</code>
            </td>
            <td align="center">
                <code>wave</code>
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                Animation is a string, if it is empty, no animation will be shown.
            </td>
        </tr>
        <tr>
            <td>
                duration
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
               1.5s
            </td>
            <td align="center">
                <code>Number</code>
            </td>
        <tr>
            <td colspan="4">
                The duration of the animation is in seconds.
            </td>
        </tr>
        <tr>
            <td>
                base-color
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
              #0000001E
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                The background color of the skeleton.
            </td>
        </tr>
        <tr>
            <td>
                highlight-color
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
               #FFFFFF66
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                The highlight color in the skeleton animation.
            </td>
        </tr>
        <tr>
            <td>
                border-radius
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
               different for any types
            </td>
            <td align="center">
                <code>String</code>
                <code>Number</code>
            </td>
        <tr>
            <td colspan="4">
                The border radius of the skeleton and it's different for any type.
            </td>
        </tr>
        <tr>
            <td>
                height
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
               different for any type
            </td>
            <td align="center">
                <code>String</code>
                <code>Number</code>
            </td>
        <tr>
            <td colspan="4">
                The height of skeleton.
            </td>
        </tr>
        <tr>
            <td>
                width
            </td>
            <td align="center">
               -
            </td>
            <td align="center">
               different for any types
            </td>
            <td align="center">
                <code>String</code>
                <code>Number</code>
            </td>
        <tr>
            <td colspan="4">
                The width of skeleton.
            </td>
        </tr>
        <tr>
            <td>
                direction
            </td>
            <td align="center">
               <code>ltr</code>
            </td>
            <td align="center">
                <code>ltr</code>
                <code>rtl</code>
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
               The direction of the animation.
            </td>
        </tr>
        <tr>
            <td>
                style
            </td>
            <td align="center">
               <code>-</code>
            </td>
            <td align="center">
                {}
            </td>
            <td align="center">
                <code>Object</code>
            </td>
        <tr>
            <td colspan="4">
                An object that pass to skeleton to set custom style.
            </td>
        </tr>
        <tr>
            <td>
                class-name
            </td>
            <td align="center">
               <code>-</code>
            </td>
            <td align="center">
                ""
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                An string that pass to skeleton to append class name.
            </td>
        </tr>
    </tbody>
</table>

### `Skeleton Container`

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Values</th>
            <th>Default</th>
            <th>Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                container-style
            </td>
            <td align="center">
                -
            </td>
            <td align="center">
                {}
            </td>
            <td align="center">
                <code>Object</code>
            </td>
        <tr>
            <td colspan="4">
                An object that pass to skeleton container to set custom style.
            </td>
        </tr>
        <tr>
            <td>
                class
            </td>
            <td align="center">
                -
            </td>
            <td align="center">
                ""
            </td>
            <td align="center">
                <code>String</code>
            </td>
        <tr>
            <td colspan="4">
                An string that pass to skeleton container to append class name.
            </td>
        </tr>
    </tbody>
</table>

## Example

<VueSkeletonLoader type="text"></VueSkeletonLoader>
