<template>Mouse position is at: {{ x }}, {{ y }}</template>
<script lang="ts" setup>
import { useMouse } from "@/hooks/useMouse";

const { x, y } = useMouse();
</script>
