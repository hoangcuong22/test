import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"
import image from "reactotron-core-client/dist/types/src/plugins/image"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Icon/}
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {JSX.Element} The rendered `Icon` component.
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  settings: require("../../assets/icons/settings.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  globe: require("../../assets/icons/globe.png"),
  user: require("../../assets/icons/user.png"),
  cart: require("../../assets/icons/cart.png"),
  frame: require("../../assets/icons/Frame.png"),
  search: require("../../assets/icons/search.png"),
  vector: require("../../assets/icons/vector.png"),
  tv: require("../../assets/icons/tv.png"),
  image: require("../../assets/icons/image.png"),
  frame1: require("../../assets/icons/Frame1.png"),
  lightning: require("../../assets/icons/lightning.png"),
  chevron_right: require("../../assets/icons/chevron_right.png"),
  crown: require("../../assets/icons/crown.png"),
  check1: require("../../assets/icons/check1.png"),
  home: require("../../assets/icons/home.png"),
  Contributions: require("../../assets/icons/Contributions.png"),
  cart_home: require("../../assets/icons/cart_home.png"),
  chat: require("../../assets/icons/chat.png"),
  dot: require("../../assets/icons/3dot.png"),
  bag: require("../../assets/icons/bag.png"),
  book: require("../../assets/icons/book.png"),
  shield: require("../../assets/icons/shield.png"),
  car:require("../../assets/icons/car.png"),
  shop: require("../../assets/icons/shop.png"),
  heart:require("../../assets/icons/heart.png"),
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
