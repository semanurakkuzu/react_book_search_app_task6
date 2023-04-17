import React from 'react'
import {
  Card,
  Stack,
  CardBody,
  Heading,
  Button,
  Text,
  Container,
  Image,
  Center,
  Box
} from '@chakra-ui/react'
import {  ArrowBackIcon } from '@chakra-ui/icons'
function BookDetail() {
  return (
    <Box
      w="100%"
      h="220px"
      backgroundImage="url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
    >
      <Container maxW="4xl">
        <Center h="150px" color="white">
          <Text fontSize="6xl" mt="10">
            Search Detail
          </Text>
        </Center>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          mt="120"
        >
          <Stack>
            <CardBody>
            <Button mt={4} colorScheme="gray" type="submit">
                <ArrowBackIcon />
              </Button>
                <Center><Heading size="lg">The Flower Workshop</Heading></Center>
                <Center><Text py="2">Ariella Chezar, Julie Michaels</Text></Center>
              <Center><Image 
                h={200}
                w={140}
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="xs"
              /></Center>
              
              <Text py="2">
                A first garden story board book that reveals how plants grow
                with lift-the-flaps and a pullout height chart. Teach your child
                how a tiny seed grows into a flower in this fascinating
                lift-the-flap garden story. A pullout height chart ends the
                book--a great way for children to remember how a sunflower
                grows, and to measure how fast your child grows, too! Through
                illustrations, photography, and flaps, sixteen delightful board
                book pages reveal the wonder of how plants grow as you follow
                the story of a mystery seed. How was it planted? What does it
                need? What will it become? As days go by, it's hard to imagine
                the tiny shoot will ever grow into a big, strong plant. Could it
                magically become the tallest of all the garden flowers? Flaps
                unfold to show plants growing, creatures hiding, and what's
                happening underground. The book includes very simple gardening
                projects and facts about garden creatures (which ones are good
                for plants, and which ones are bad), and children will find out
                what a pollinator is, and how to attract pollinators to the
                garden. The perfect gift for aspiring gardeners, complete with a
                height chart.
              </Text>
              <Text align={'right'} py="2">23.01.2015</Text>
            </CardBody>
          </Stack>
        </Card>
      </Container>
    </Box>
  )
}

export default BookDetail
