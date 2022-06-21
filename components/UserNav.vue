<template>
  <ul>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user' }">
      <span>
        <NuxtLink to="/user"> <i class="dot dot1"></i>账户总览</NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/myproject' }">
      <span>
        <NuxtLink style="text-align:center;width:115px;" to="/user/myproject">我的项目</NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/mydoc' }">
      <span>
        <NuxtLink style="text-align:center;width:115px;" to="/user/mydoc">我的文档</NuxtLink>
      </span>
    </li>

  </ul>
</template>

<script>
export default {}
</script>
